class Service {
    hover;

    x;

    constructor(hover, x) {
        this.hover = hover;
        this.x = x;
    }

    get hover() {
        return this.hover;
    }

    set hover(hover) {
        this.hover = hover;
    }

    get x() {
        return this.x;
    }

    set x(x) {
        this.x = x;
    }
}