import './narration-data.js';
import './audio-data.js';
import './layout-data.js';
import './tema-game.js';
runOnStartup(async runtime=>{
 let ui;
 const showLayout=()=>{
 for(const name of ['yanlis','doğru','yesil_cerceve','Sprite','yildiz'])for(const instance of runtime.objects[name]?.getAllInstances()||[])instance.isVisible=false;
 ui.show(runtime.layout.name);
 };
 runtime.addEventListener('beforeprojectstart',()=>{
  ui=window.TemaGame.mount(document.body,name=>runtime.goToLayout(name),false,runtime);
  for(const layout of runtime.getAllLayouts())layout.addEventListener('afterlayoutstart',showLayout);
  showLayout();runtime.addEventListener('resize',()=>ui.fit());
 });
});
