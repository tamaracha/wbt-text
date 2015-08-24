import angular from 'angular';
export default /*@ngInject*/class MarkdownProvider{
  constructor(markdownit){
    this.config = {
      preset: 'default',
      options: {
        html: true,
        typographer: true,
        quotes: '„“‚‘',
        breaks: true
      }
    };
    this.markdownit = markdownit;
  }
  get preset(){
    return this.config.preset;
  }
  set preset(val){
    this.config.preset = val;
    return this;
  }
  get options(){
    return this.config.options;
  }
  set options(val){
    angular.extend(this.config.options, val);
    return this;
  }
  $get(){
    return this.markdownit(this.config.preset,this.config.options);
  }
}
