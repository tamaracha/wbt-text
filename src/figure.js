function figure(state,line,endline,silent){
  if(!state.isEmpty(line+1)){return false;}
  const src = state.getLines(line,line+1).trim();
  const patt = /!\[([^\]]*)\]\(([^\)]*)\)/;
  const res = src.match(patt);
  if(!res){return false;}
  state.line = line+2;
  if(silent){return true;}
  let token = state.push('paragraph_open','figure',1);
  token.map = [line,line+1];
  token = state.push('inline',0);
  token.content = src;
  token.children = [];
  token = state.push('paragraph_open','figcaption',1);
  token.map = [line,line+1];
  token = state.push('inline',0);
  token.content = res[1];
  token.children = [];
  state.push('paragraph_close','figcaption',-1);
  state.push('paragraph_close','figure',-1);
  return true;
}

export default function figure_plugin(md){
  md.block.ruler.before('paragraph','figure',figure);
}
