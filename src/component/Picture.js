export function Picture ({className, width, height, alt, src}) {
  return <img className= {className ? className : ''} src = {src} width = {width} height = {height} alt = {alt} />
}