const {watch,src, dest,series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))


function buildStyles (){
    return src('dist/**/*.scss').pipe(sass()).pipe(dest('css'))
}

function watchTask(){
    watch(['dist/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)