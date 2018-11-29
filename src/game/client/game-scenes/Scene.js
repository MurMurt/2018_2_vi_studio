export default class Scene {
    constructor(ctx) {
        this.ctx = ctx;
        this.figures = {};

        this._id = 0;
    }

    ID() {
        return `#${this._id++}`;
    }

    push(figure) {
        const id = this.ID();
        this.figures[id] = figure;
        return id;
    }


    remove(id) {
        const figure = this.figures[id];
        this.backView = this.backView.filter(function (item) {
            return item !== figure;
        });
        this.frontView = this.frontView.filter(function (item) {
            return item !== figure;
        });

        delete this.figures[id];
        if (Object.keys(this.figures).length === 0) {
            console.info('Scene is empty!');
        }
    }

    render() {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        Object.keys(this.figures).forEach(key => this.figures[key].render(ctx));
    }

    clear() {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
}