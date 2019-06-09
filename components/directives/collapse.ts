
const collapse = (el, binding) => {

    el.style.opacity = (el.style.opacity === '0') ? '1' : '0';
    el.style.transition = 'opacity 2s';
}

export default collapse


