console.log('vue test: ', Vue);

const root = new Vue({
    el: '#root',
    data: {
        currentIndex: 0,
        images: [
            './images/image1.jpg',
            './images/image2.jpg',
            './images/image3.jpg',
            './images/image4.jpg',
        ],


    },

    methods: {
        isActive(index) {
            return this.currentIndex === index ? 'active' : '';
        },


    }

})