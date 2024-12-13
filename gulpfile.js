const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

// Tarefa para compilar SASS
gulp.task('styles', function () {
    return gulp.src('src/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/styles'));
});

// Tarefa para minificar scripts
gulp.task('scripts', function() {
    return gulp.src(['scripts/*.js']) // Inclui todos os scripts
        .pipe(concat('all.js')) // Concatena os arquivos
        .pipe(uglify()) // Minifica o código
        .pipe(gulp.dest('dist/js')); // Destino dos arquivos minificados
});

// Tarefa para observar mudanças
gulp.task('watch', function () {
    gulp.watch('src/styles/*.scss', gulp.series('styles'));
    gulp.watch('src/scripts/*.js', gulp.series('scripts'));
});

// Tarefa padrão
gulp.task('default', gulp.series('styles', 'scripts', 'watch'));





