var gulp = require('gulp');
var sass=require('gulp-sass');

gulp.task('merhaba',function(){


    return gulp.src('./scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./'))
})

gulp.task('izle',function(){

gulp.watch('./scss/**/*.scss',gulp.series('merhaba'))
}); 