
var gulp = require('gulp')
var sass = require('gulp-sass')
var cleanCSS = require('gulp-clean-css')
var sourcemaps = require('gulp-sourcemaps')
var browsersync = require('browser-sync').create()
var imagemin = require('gulp-imagemin')
var ghpages = require('gh-pages')
var fileinclude = require('gulp-file-include')

sass.compiler = require('node-sass');



gulp.task('sass', function() {
    //run "sass css/app.scss app.css --watch"
    return gulp.src('src/css/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(
            cleanCSS({
                compatibility: 'ie8'
            })
        )
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'))
        .pipe(browsersync.stream())
})


gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist'))
})

gulp.task('js', function() {
    return gulp.src('src/js/*.js')
        .pipe(gulp.dest('dist/js'))
})

gulp.task('p5', function() {
    return gulp.src('src/js/letters/*.js')
        .pipe(gulp.dest('dist/js/letters'))
})


gulp.task('fonts', function() {
    return gulp.src('src/fonts/*')
        .pipe(gulp.dest('dist/fonts'))
})


gulp.task('images', function() {
    return gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
})







gulp.task('watch', function() {

    browsersync.init({
        server: {
            baseDir: 'dist'
        }
    })

    gulp.watch('src/*.html', gulp.series('html')).on('change', browsersync.reload)
    gulp.watch('src/css/app.scss', gulp.series('sass'))
    gulp.watch('src/js/*.js', gulp.series('js')).on('change', browsersync.reload)
    gulp.watch('src/js/letters/*.js', gulp.series('p5')).on('change', browsersync.reload)
    gulp.watch('src/fonts/*', gulp.series('fonts'))
    gulp.watch('src/img/*', gulp.series('images'))
})


gulp.task('deploy', async function() {
    ghpages.publish('dist', function(err) {})
})




const build = gulp.series(['html', 'sass', 'js', 'p5', 'fonts', 'images', 'watch'])
gulp.task('default', build)
