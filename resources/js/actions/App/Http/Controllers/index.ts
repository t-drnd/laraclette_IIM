import ApiKeyController from './ApiKeyController'
import Api from './Api'
import TrackController from './TrackController'
import PlaylistController from './PlaylistController'
import Settings from './Settings'

const Controllers = {
    ApiKeyController: Object.assign(ApiKeyController, ApiKeyController),
    Api: Object.assign(Api, Api),
    TrackController: Object.assign(TrackController, TrackController),
    PlaylistController: Object.assign(PlaylistController, PlaylistController),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers