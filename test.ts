interface walker {
    
        walk()
    
    }
    
    
    interface fighter {
    
        attack( f : fighter)
        defend( f : fighter)
        health( f : fighter)
    }
    
    class Ninja {
    
    attack (f) {}
    defend (f) {}
    health (f) {}
    throw  (f) {}
    jump   (f) {}
    }
    
    let n = new Ninja();
    let f : fighter =n;
    f.attack;