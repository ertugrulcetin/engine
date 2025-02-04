import * as pc from '../../../../';

class HelloWorldExample {
    static CATEGORY = 'Misc';
    static NAME = 'Hello World';

    example(canvas: HTMLCanvasElement, deviceType: string): void {

        const app = new pc.Application(canvas, {});

        // create box entity
        const box = new pc.Entity('cube');
        box.addComponent('render', {
            type: 'box'
        });
        app.root.addChild(box);

        // create camera entity
        const camera = new pc.Entity('camera');
        camera.addComponent('camera', {
            clearColor: new pc.Color(0.5, 0.6, 0.9)
        });
        app.root.addChild(camera);
        camera.setPosition(0, 0, 3);

        // create directional light entity
        const light = new pc.Entity('light');
        light.addComponent('light');
        app.root.addChild(light);
        light.setEulerAngles(45, 0, 0);

        // rotate the box according to the delta time since the last frame
        app.on('update', (dt: number) => box.rotate(10 * dt, 20 * dt, 30 * dt));

        app.start();
    }
}

export default HelloWorldExample;
