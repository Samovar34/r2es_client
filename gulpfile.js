const gulp = require("gulp"),
      scss = require("gulp-sass");

let path = {
    build: {
        html: "build/",
        style: "build/style/",
        js: "build/js/",
        img: "build/img/",
        fonts: "build/fonts/"
    },

    watch: {
        html: "src/*.html",
        style: "src/style/*.scss",
        js: "src/js/**/*.js",
        img: "src/img/*.*",
        fonts: "src/fonts/**/*.*"
    },

    src: {
        html: "src/*.html",
        style: "src/style/*.scss",
        js: "src/js/**/*.js",
        img: "src/img/*.*",
        fonts: "src/fonts/**/*.*"
    }
}

// TASKS

// build html
gulp.task("build:html", () => {
    gulp.src(path.src.html)
        .pipe(path.build.html);
});

// build style
gulp.task("build:style", () => {
    gulp.src(path.src.style)
        .pipe(scss().on("error", scss.logError))
        //add autoprefixer
        //add minify
        .pipe(gulp.dest(path.build.style));
});