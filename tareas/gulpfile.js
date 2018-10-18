const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const postcss = require('gulp-postcss');
const cssnext = require('postcss-cssnext')

const plugins = [
    cssnext()
]

gulp.task('hacerAlgo', ()=>{
    return gulp.src()
    .pipe()
    .pipe(gulp.dest())
})

gulp.task('postcss',()=>{
    gulp.src('src/style.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('dist'))
})

gulp.task('css-autoprefixer', ()=>{
    gulp.src('src/style.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist'))
})

gulp.task('watch-css', () =>
    gulp.watch('src/*.css', ['css-autoprefixer', 'postcss'])
)

gulp.task('build', ['css-autoprefixer', 'postcss']);

gulp.task('default', ['css-autoprefixer', 'postcss', 'watch-css']);


/* gulp.task('default', ()=>{
    gulp.src('src/style.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade:false
    }))
    .pipe(gulp.dest('dist'))
}) */