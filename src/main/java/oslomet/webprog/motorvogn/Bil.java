package oslomet.webprog.motorvogn;

public class Bil {
    public String bilmerke;
    public String biltype;

    public Bil(String bilmerke, String biltype){
        this.bilmerke = bilmerke;
        this.biltype = biltype;
    }
    public String getBilmerke() {
        return bilmerke;
    }

    public void setBilmerke(String bilmerke) {
        this.bilmerke = bilmerke;
    }

    public String getBiltype() {
        return biltype;
    }

    public void setBiltype(String biltype) {
        this.biltype = biltype;
    }
}
