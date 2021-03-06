console.log('vue test: ', Vue);

const root = new Vue({
    el: '#root',
    data: {
        currentIndex: 0,
        images: [
            './images/image1.jpg',
            './images/image2.jpg',
            './images/image3.jpg',
            './images/image4.jpg'
        ],

    },

    methods: {
        isActive(index) {
            return this.currentIndex === index ? 'active' : '';
        },


        play() {

            this.timerId = setInterval(this.increaseIndex, 3000);
        },

        increaseIndex() {

            const maxLength = this.images.length - 1;
            if (this.currentIndex < maxLength) {
                this.currentIndex++;

            } else {

                this.currentIndex = 0;
            }

            this.timerReset();
            this.play();


        },

        decreaseIndex() {

            if (this.currentIndex === 0) {
                const maxLength = this.images.length - 1;
                this.currentIndex = maxLength;

            } else {

                this.currentIndex--;
            }

            this.timerReset();
            this.play();
        },

        // click on dots to change photo
        currentPhoto(index) {
            this.currentIndex = index;
            this.timerReset();
            this.play();
        },



        timerReset() {
            clearInterval(this.timerId)
        }

    },

    created() {
        this.play();
    }

})
