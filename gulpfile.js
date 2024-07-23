const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss');

function buildStyles() {
    return src('sass/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({
            content: ['index.html'],
            safelist: {
                standard: ['o-0', '0-100', 'display-b', 'text-red', 'text-green']
            }
        }))
        .pipe(dest('css'))
}

function watchTask() {
    watch(['sass/**/*.scss', 'index.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)