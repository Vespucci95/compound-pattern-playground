import BeatModel from './beat-model';
import BeatView from './beat-view';
import BeatController from './beat-controller';

(async function () {
  const model = new BeatModel();
  const view = new BeatView('app', model);
  const controller = new BeatController(model)
})();