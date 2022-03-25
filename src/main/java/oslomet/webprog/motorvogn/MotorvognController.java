package oslomet.webprog.motorvogn;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MotorvognController {
    public final List<Motorvogn> motorvognRegister = new ArrayList<>();
    public final List<Bil> bilRegister = new ArrayList<>();

    public MotorvognController(){
        Bil bil1 = new Bil("Volvo","V30");
        bilRegister.add(bil1);
        Bil bil2 = new Bil("Volvo","v70");
        bilRegister.add(bil2);
        Bil bil3 = new Bil("Volvo","V90");
        bilRegister.add(bil3);
        Bil bil4 = new Bil("BMW","x5");
        bilRegister.add(bil4);
        Bil bil5 = new Bil("BMW","x6");
        bilRegister.add(bil5);
        Bil bil6 = new Bil("BMW","x7");
        bilRegister.add(bil6);
        Bil bil7 = new Bil("Audi","RS3");
        bilRegister.add(bil7);
        Bil bil8 = new Bil("Audi","RS4");
        bilRegister.add(bil8);
        Bil bil9 = new Bil("Audi","RS6");
        bilRegister.add(bil9);
    }

    @GetMapping("/hentBiler")
    public List<Bil> hentBiler(){
        return bilRegister;
    }

    @PostMapping("/api")
    public void lagre(Motorvogn motorvogn) {
        motorvognRegister.add(motorvogn);
    }

    @GetMapping("/api")
    public List<Motorvogn> hent() {
        return motorvognRegister;
    }

    @GetMapping("/clear")
    public void slett() {
        motorvognRegister.clear();
    }
}
