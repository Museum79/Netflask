DROP TABLE IF EXISTS "videos"; 
DROP TABLE IF EXISTS "genres";
DROP TABLE IF EXISTS "users";
DROP TABLE IF EXISTS "videos_genres";



CREATE TABLE IF NOT EXISTS "videos"(
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(50) NOT NULL,
    "date" VARCHAR(50) NOT NULL,
    "description" VARCHAR(1500) NOT NULL,
    "picture" VARCHAR(1500),
    "video" VARCHAR(1500),
    "category" VARCHAR(50)
      
);


CREATE TABLE IF NOT EXISTS "users"(
    "id" SERIAL PRIMARY KEY,
    "email" VARCHAR(250),
    "password" VARCHAR(50)
      
);


CREATE TABLE IF NOT EXISTS "genres"(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50)
);


CREATE TABLE IF NOT EXISTS "videos_genres"(
    "video_id" INT NOT NULL,
    "genre_id" INT NOT NULL,
    FOREIGN KEY (video_id) REFERENCES videos (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (genre_id) REFERENCES genres (id) ON DELETE CASCADE ON UPDATE CASCADE,
    PRIMARY KEY (video_id, genre_id)
);


INSERT INTO "genres"("id", "name")
VALUES('1', 'Action Aventure'),
    ('2', 'Comedie'),
    ('3', 'Documentaire'),
    ('4', 'Horreur'),
    ('5', 'Drame'),
    ('6', 'Fantastique'),
    ('7', 'Jeunesse'),
    ('8', 'Musique et comédies musicales'),
    ('9', 'Policier'),
    ('10', 'Thriller'),
    ('11', 'Science Fiction'),
    ('12', 'Romance');

INSERT INTO "videos"("id", "title", "date", "description", "picture", "video", "category")
VALUES('1', 'Avatar 2', '2022', 'Description Avatar', 'https://dka575ofm4ao0.cloudfront.net/pages-transactional_logos/retina/341255/iyMOPuPAxJI.jpg', 'https://www.youtube.com/watch?v=STH90f4SHsc', 'movie'),
('2', 'Spider Man No Way Home', '2021', 'Description SpiderMan', 'https://leclaireur.fnac.com/wp-content/uploads/2022/09/no-way-home.jpg', 'https://www.youtube.com/watch?v=2wqT16eEThI', 'movie'),
('3', 'Black Panther: Wakanda Forever', '2022', 'Description Black Panther Wakanda Forever', 'https://www.lemagducine.fr/wp-content/uploads/2022/11/Black-Panther-Wakanda-Forever-film-Ryan-Coogler-critique-cinema.jpg', 'https://www.youtube.com/watch?v=DlGIWM_e9vg', 'movie'),
('4', 'Uncharted', '2022', 'Description Uncharted', 'https://www.hollywoodreporter.com/wp-content/uploads/2021/10/uncharted.jpg?w=2000&h=1126&crop=1&resize=681%2C383', 'https://www.youtube.com/watch?v=mduvAjUGl4s', 'movie'),
('5', 'Les Visiteurs', '1993', 'Description Les Visiteurs', 'https://img-4.linternaute.com/Hho-2RDB08vXREQ7B1xb27nPzys=/1500x/smart/c1098e6586894b868d14ed71bd27df88/ccmcms-linternaute/15304055.jpg', 'https://www.youtube.com/watch?v=_gFwe6HiyFI', 'movie'),
('6', 'Free Guy', '2021', 'Description Free Guy', 'https://image.over-blog.com/zj0Ces2FKD4-Zq2g1ghUIq2RmXo=/filters:no_upscale()/image%2F1397582%2F20220125%2Fob_72457f_102998493.jfif', 'https://www.youtube.com/watch?v=4P6-TMgrDXg', 'movie'),
('7', 'Bad Boys For Life', '2020', 'Description Bad Boys for Life', 'https://3238leblogdemarvelll-1278.kxcdn.com/wp-content/uploads/2020/02/Bad-Boys-for-Life-banniere-850x446.jpg', 'https://www.youtube.com/watch?v=P9-EBg4QGEY', 'movie'),
('8', 'Toy Story', '1995', 'Description Toy Story', 'https://focus.telerama.fr/967x550/100/2021/03/29/1b6a213a-6f33-49ea-84a9-fb4f32c41368.jpg', 'https://www.youtube.com/watch?v=Cb-EW5gwkrk', 'movie'),
('9', 'Qu est ce qu on a fait au bon dieu', '2014', 'Description bon dieu', 'https://www.parismatch.com/lmnr/f/webp/r/960,640,FFFFFF,forcex,center-middle/img/var/pm/public/media/image/2022/02/28/15/Qu-est-ce-qu-on-a-tous-fait-au-Bon-Dieu-de-Philippe-de-Chauveron-la-critique-en-avant-premiere.jpg?VersionId=kXzab0zkxzEHwyanU_FWI1PZNcaPo16t', 'https://www.youtube.com/watch?v=QerOPic11Tk', 'movie'),
('10', 'Scary Movie', '2014', 'Description scary movie', 'https://static1.terrafemina.com/articles/2/27/38/02/@/294265-scary-movie-ce-qu-il-faut-savoir-sur-950x635-1.jpg', 'https://www.youtube.com/watch?v=J5n-yaLocgY', 'movie'),
('11', 'Ted', '2012', 'Description Ted', 'https://i0.wp.com/www.solzyatthemovies.com/wp-content/uploads/2022/02/Ted.jpg?resize=800%2C600&ssl=1', 'https://www.youtube.com/watch?v=3NPVAUxspdc', 'movie'),
('12', '21 Jump Street', '2012', 'Description 21 Jump Street', 'https://static.insiderenvy.com/images/2020/04/15161004/21_jump_street_2012_key02_f-scaled.jpg', 'https://www.youtube.com/watch?v=6P7TW-e_t5g', 'movie'),
('13', 'Batman Begins', '2005', 'Description Batman Begins', 'https://musicart.xboxlive.com/6/ccbb6373-0000-0000-0000-000000000009/504/image.jpg?w=1920&h=1080', 'https://www.youtube.com/watch?v=jXrFsn9pcZY', 'movie'),
('14', 'Mission Impossible 4', '2011', 'Description MI4', 'https://hbomax-images.warnermediacdn.com/images/GYSVDSgsNzrSVmgEAAAOK/tileburnedin?size=1280x720&partner=hbomaxcom&v=995aac8efc1fceaa0167eb432d117ab0&host=art-gallery.api.hbo.com&language=en-us&w=1280', 'https://www.youtube.com/watch?v=r5Pw_ntvbEo', 'movie'),
('15', 'Gladiator', '2000', 'Description Gladiator', 'https://hbomax-images.warnermediacdn.com/images/GX5NsuAf7k57CDwEAAAAZ/tileburnedin?size=1280x720&partner=hbomaxcom&v=83ccaa5486bf1077f17386026ddb7ec8&host=art-gallery.api.hbo.com&language=en-us&w=1280', 'https://www.youtube.com/watch?v=7XrK-4Qf-vE', 'movie'),
('16', 'Hitman', '2007', 'Description Hitman', 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AF4C70A83DD2C1CA3D3500078634529CAE4FF03C615532DB83FBFE8329DCEAE8/scale?width=1200&aspectRatio=1.78&format=jpeg', 'https://www.youtube.com/watch?v=pAMy7IhOVQE', 'movie'),
('17', 'Transformers', '2007', 'Description Transformers', 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/02/Transformers-2007-1.jpg', 'https://www.youtube.com/watch?v=jjaYFGruMs8', 'movie'),
('18', 'BloodShot', '2020', 'Description BloodShot', 'https://i0.wp.com/www.close-upmag.com/wp-content/uploads/2020/03/critique-bloodshot.jpg?fit=640%2C290&ssl=1', 'https://www.youtube.com/watch?v=JIJ07pCTCWY', 'movie'),
('19', 'La tour Montparnasse Infernale', '2001', 'Description La tour Montparnasse Infernale', 'https://www.welovecomedy.fr/wp-content/uploads/2022/07/la-tour-infernale-montparnasse.png', 'https://www.youtube.com/watch?v=4_Ff47nXZ0k', 'movie'),
('20', 'Fast and Furious 7', '2015', 'Description Fast 7', 'https://images.ladepeche.fr/api/v1/images/view/5c3479cb8fe56f47af5f43bc/large/image.jpg', 'https://www.youtube.com/watch?v=Wm3jXZhqj-I', 'movie'),
('21', 'Shrek Le Troisieme', '2007', 'Description shrek 3', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAF0yquHnCARXOOiy57IlLL6sf-KbeLerUnQ&usqp=CAU', 'https://www.youtube.com/watch?v=7j9fb9h2eyo', 'movie'),
('22', 'The Walking Dead', '2021', 'Description The Walking dead', 'https://thumb.canalplus.pro/http/unsafe/%7BresolutionXY%7D/filters:quality(%7BimageQualityPercentage%7D)/img-hapi.canalplus.pro:80/ServiceImage/ImageID/107517065', 'https://www.youtube.com/watch?v=AbtiqJGhWyY', 'serie'),
('23', 'Breaking Bad', '2013', 'Description Breaking Bad', 'https://www.pause-canap.com/media/wysiwyg/serie-breaking-bad.JPG', 'https://www.youtube.com/watch?v=CoWsuFdqeYE', 'serie'),
('24', 'Cobra Kai', '2022', 'Description Cobra Kai', 'https://ntvb.tmsimg.com/assets/p15315129_b_h8_ac.jpg?w=960&h=540', 'https://www.youtube.com/watch?v=-DdEP1BzDjQ', 'serie'),
('25', 'The Witcher', '2021', 'Description The Witcher', 'https://static.techspot.com/images2/news/bigimage/2019/07/2019-07-01-image-14.jpg', 'https://www.youtube.com/watch?v=ymYBUDq6wnI', 'serie'),
('26', 'Game of Throne', '2019', 'Description Game Of Throne', 'https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/4909/474909-h', 'https://www.youtube.com/watch?v=Ng1W_qu5aJM', 'serie'),
('27', 'Vikings', '2019', 'Description Vikings', 'https://ntvb.tmsimg.com/assets/p9155926_b_h8_as.jpg?w=960&h=540', 'https://www.youtube.com/watch?v=mAl60ykBm4A', 'serie');


INSERT INTO "videos_genres"("video_id", "genre_id")
VALUES('1', '1'),
('1', '6'),
('2', '1'),
('2', '6'),
('3', '1'),
('3', '6'),
('4', '1'),
('5', '2'),
('6', '2'),
('6', '11'),
('7', '1'),
('7', '2'),
('8', '7'),
('9', '2'),
('10', '2'),
('10', '4'),
('11', '2'),
('12', '1'),
('12', '2'),
('13', '1'),
('13', '6'),
('14', '1'),
('15', '1'),
('16', '1'),
('17', '1'),
('17', '11'),
('18', '1'),
('18', '11'),
('19', '2'),
('20', '1'),
('20', '2'),
('21', '7'),
('22', '1'),
('23', '1'),
('24', '1'),
('25', '1'),
('25', '6'),
('26', '1'),
('26', '6'),
('27', '1');


