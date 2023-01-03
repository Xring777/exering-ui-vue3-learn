export function getStyle(el, prop){
    return window.getComputedStyle(el, null)[prop]
}