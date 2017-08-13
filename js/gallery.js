







var dir = "portfoliofolder/" + slice;
var fileextension = ".jpg";

var max_images = slice + ".images"

   var count;

   for(count = 1; count < eval(max_images)+1; count++){



     document.write('<img ' +

                     'srcset="portfoliofolder/'+slice + '/'+ count +'-small.jpg 340w,'+
                              'portfoliofolder/'+slice + '/'+ count +'-medium.jpg 640w,'+
                              'portfoliofolder/'+slice + '/'+ count +'-large.jpg 900w,"'+

                          'sizes="(min-width: 900px) 900px, calc(100vw - 3em),'+
                          '(min-width: 401px) 640px, calc(100vw - 3em),'+
                          '(max-width: 400px) 340px, calc(100vw - 3em),'+
                          '640px'+



                       'src="portfoliofolder/'+
                                       slice +
                                       '/'+
                                       count +

                                       '.jpg"  type="image/jpg">'+
                        '<br>');

      // document.write('<img src="portfoliofolder/'+
      //                 slice +
      //                 '/'+
      //                 count +
      //                 '.jpg"  type="image/jpg"><br>');

   }
