import BeatModel from './model/beat-model';
import BeatView from './view/beat-view';
import BeatController from './controller/beat-controller';

(async function () {
  const model = new BeatModel();
  const view = new BeatView('app', model);
  const controller = new BeatController(model);
})();
