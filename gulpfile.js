const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer'); 
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

//Compilando o Sass, adicionando autoprefixed e dando refresh na pagina

function compilaSass() {
    return gulp
    .src('scss/*.scss')
    .pipe(sass({outputStyle : 'compressed'}))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade : false,
    }))
    .pipe(gulp.dest('css/'))
    // quando salvar automaticamente atualiza o css exibido no navegador
    .pipe(browserSync.stream());
}
//Tarefa do Sass
gulp.task('sass', compilaSass);

//Plugins CSS

function pluginsCSS() {
    return gulp
    .src('css/lib/*.css')
    .pipe(concat('plugins.css'))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
}

gulp.task('plugincss', pluginsCSS);

//Função do Gulp Concat

function gulpJs(){
    return gulp
    .src('js/scripts/*.js')
    .pipe(concat('all.js'))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
    // quando salvar automaticamente atualiza o js exibido no navegador
    .pipe(browserSync.stream());
}

//Função concat all JS

gulp.task('alljs', gulpJs);

function pluginsJs() {
    return gulp
    .src(['./js/lib/aos.min.js','./js/lib/swiper.min.js'])
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream())
}

gulp.task('pluginjs', pluginsJs);

//Função do BrowserSync
function browser() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
}

//Tarefa do BrowserSync
gulp.task('browser-sync', browser);

//Função do watch para alterações em Sass e HTML
function watch() {
    gulp.watch('scss/*.scss', compilaSass);
    // plugin CSS
    gulp.watch('css/lib/*.css', pluginsCSS);

    gulp.watch('*.html').on('change', browserSync.reload);
    // watch unir arquivos JS
    gulp.watch('js/scripts/*js', gulpJs);
    // plugin JS
    gulp.watch('js/lib/*.js', pluginsJs);
}

//Tarefa do watch 
gulp.task('watch', watch);

//Tarefas default que executa o watch e o browsersyn
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass', 'plugincss', 'alljs', 'pluginjs'));