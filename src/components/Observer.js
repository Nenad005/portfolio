const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry.target.classList)
        if (!entry.target.className.includes('seen')) {
            if (entry.isIntersecting) {
                entry.target.classList.add('show')
                entry.target.classList.add('seen')
            }
            else {
                entry.target.classList.remove('show')
            }
        }
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    })
})

export default observer