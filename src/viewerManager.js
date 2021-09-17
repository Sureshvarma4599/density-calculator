import microEngine from "./models/microengine.scs"

export default class ViewerManager {
    createViewer(canvas){
        let viewer = new window.Communicator.WebViewer({
            containerId: canvas,
            endpointUri: microEngine
        })
        viewer.start();
        return viewer;
    }
    
}
