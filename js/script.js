var app = new Vue (
  {
    el: '#root',
    data: {
      title: 'VUE SLIDER',
      image: [
        'https://picsum.photos/seed/picsum/600/400',
        'https://picsum.photos/600/400?grayscale',
        'https://picsum.photos/id/237/600/400'
      ],
      imageIndex: 0
    },
    methods: {
      prevImg: function(){
        this.imageIndex--;
        if(this.imageIndex == -1){
          this.imageIndex = this.image.length - 1;
        }
      },
      nextImg: function(){
        this.imageIndex++;
        if(this.imageIndex == this.image.length){
          this.imageIndex = 0
        }
      }
    }
  }
)
