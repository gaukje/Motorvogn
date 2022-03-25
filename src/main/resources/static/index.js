$(() =>{
    hentBiler();
})

hentBiler = () => {
    $.get("/hentBiler", biler => formaterBiler(biler))
}

formaterBiler = biler => {
    let ut = "<select id='valgtMerke' onchange='finnTyper()'>"
    let forrigeMerke = "";
    ut += "<option>Velg merke </option>";

    for(const bil of biler){
        if(bil.bilmerke !== forrigeMerke){
            ut += "<option>" + bil.bilmerke + "</option>"
        }
        forrigeMerke = bil.bilmerke;
    }
    ut += "</select>"
    $("#bilmerke").html(ut);
}

finnTyper = () => {
    const valgtMerke = $("#valgtMerke").val();
    $.get("/hentBiler", biler => {
        formaterTyper(biler, valgtMerke);
    })
}

formaterTyper = (biler, valgtMerke) => {
    let ut = "<select id='valgtType'>"

    for(const bil of biler){
        if(bil.bilmerke === valgtMerke){
            ut += "<option>" + bil.biltype + "</option>";
        }
    }
    ut += "</select>";
    $("#biltype").html(ut);
}

$(() => {
    $("#registrer").click(() => {
        const personnummer = $("#personnummer");
        const navn = $("#navn");
        const adresse = $("#adresse");
        const kjennetegn = $("#kjennetegn");
        const bilmerke = $("#valgtMerke");
        const biltype = $("#valgType");

        const motorvogn = {
            personnummer : personnummer.val(),
            navn : navn.val(),
            adresse : adresse.val(),
            kjennetegn : kjennetegn.val(),
            bilmerke : bilmerke.val(),
            biltype : biltype.val()
        }

        if(inputVal(motorvogn)){
            $.post("/api", motorvogn, () => hent())
                personnummer.val("");
                navn.val("");
                adresse.val("");
                kjennetegn.val("");
                bilmerke.val("");
                biltype.val("");

        } else {
            console.log("Feil input")
        }

        $("#nullstill").click(() => {
            $.get("/clear", () => {
                $.get("/api", hent)
            })
        })
    })
})

const hent = () => {
    $.get("/api", biler => formaterData(biler))
}

const formaterData = biler => {
    let ut = "";

    if(biler.length > 0){
        ut += "<table><tr><th>Personnummer</th><th>Navn</th><th>Adresse</th><th>Kjennetegn</th><th>Merke</th>" +
            "<th>Type</th></tr>";
        for(const bil of biler){
            ut += "<tr><td>" + bil.personnummer + "</td><td>" + bil.navn + "</td><td>" + bil.adresse + "</td><td>" + bil.kjennetegn +
                "</td><td>" + bil.bilmerke + "</td><td>" + bil.biltype + "</td></tr>";
        }
    } else {
        for(const bil of biler){
            ut += "<tr><td>" + bil.personnummer + "</td><td>" + bil.navn + "</td><td>" + bil.adresse + "</td><td>" + bil.kjennetegn +
                "</td><td>" + bil.bilmerke + "</td><td>" + bil.biltype + "</td></tr>";
        }
    }
    ut += "</table>"
    $("#output").html(ut);
}

const inputVal = motorvogn => {
if (motorvogn.personnummer === "") return false;
else if(motorvogn.navn === "") return false;
else if(motorvogn.adresse === "") return false;
else if(motorvogn.kjennetegn === "") return false;
else if(motorvogn.bilmerke === "") return false;
else return motorvogn.biltype !== "";
}