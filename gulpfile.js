var gulp = require('gulp')
var iconfont = require('gulp-iconfont')
var iconfontcss = require('gulp-iconfont-css')

// gulp.task('iconfont', function(){
//   return gulp.src(['assets/icons/*.svg'])
//     .pipe(iconfontcss({
//       fontName: 'icons',
//       targetPath: '../../assets/css/icons.scss',
//       fontPath: './'
//     }))
//     .pipe(iconfont({
//       fontName: 'icons',
//       formats: ['ttf', 'eot', 'woff'],
//       normalize: true
//     }))
//     .pipe(gulp.dest('assets/css/'))
// })

// run gulp iconfont
gulp.task('iconfont', function(){
  return gulp.src(['assets/icons/*.svg'])
    .pipe(iconfontcss({
      fontName: 'icons',
      targetPath: '../../assets/css/icons.css',
      fontPath: ''
    }))
    .pipe(iconfont({
  		fontName: 'icons',
  		fontHeight: 1000,
  		normalize: true
      ,
  		centerHorizontally: true
  	}))
    .pipe(gulp.dest('assets/css/'));
});
