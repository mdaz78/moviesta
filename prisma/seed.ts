const { PrismaClient } = require('@prisma/client');

const movies = [
  {
    title: 'Avatar',
    released: '18 Dec 2009',
    runtime: '162 min',
    plot: 'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    poster:
      'https://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
  },
  {
    title: '300',
    released: '09 Mar 2007',
    runtime: '117 min',
    plot: 'King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.',
    poster:
      'https://ia.media-imdb.com/images/M/MV5BMjAzNTkzNjcxNl5BMl5BanBnXkFtZTYwNDA4NjE3._V1_SX300.jpg',
  },
  {
    title: 'The Avengers',
    released: '04 May 2012',
    runtime: '143 min',
    plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
    poster:
      'https://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg',
  },
  {
    title: 'The Wolf of Wall Street',
    released: '25 Dec 2013',
    runtime: '180 min',
    plot: 'Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.',
    poster:
      'https://ia.media-imdb.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg',
  },
  {
    title: 'Interstellar',
    released: '07 Nov 2014',
    runtime: '169 min',
    plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster:
      'https://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg',
  },
  {
    title: 'Game of Thrones',
    released: '17 Apr 2011',
    runtime: '56 min',
    plot: 'While a civil war brews between several noble families in Westeros, the children of the former rulers of the land attempt to rise up to power. Meanwhile a forgotten race, bent on destruction, plans to return after thousands of years in the North.',
    poster:
      'https://ia.media-imdb.com/images/M/MV5BMjM5OTQ1MTY5Nl5BMl5BanBnXkFtZTgwMjM3NzMxODE@._V1_SX300.jpg',
  },
  {
    title: 'Vikings',
    released: '03 Mar 2013',
    runtime: '44 min',
    plot: 'The world of the Vikings is brought to life through the journey of Ragnar Lothbrok, the first Viking to emerge from Norse legend and onto the pages of history - a man on the edge of myth.',
    poster:
      'https://ia.media-imdb.com/images/M/MV5BOTEzNzI3MDc0N15BMl5BanBnXkFtZTgwMzk1MzA5NzE@._V1_SX300.jpg',
  },
  {
    title: 'Gotham',
    released: '01 Aug 2014',
    runtime: '42 min',
    plot: "The story behind Detective James Gordon's rise to prominence in Gotham City in the years before Batman's arrival.",
    poster:
      'https://ia.media-imdb.com/images/M/MV5BMTY2MjMwNDE4OV5BMl5BanBnXkFtZTgwNjI1NjU0OTE@._V1_SX300.jpg',
  },
  {
    title: 'Power',
    released: '12 Nov 2023',
    runtime: '50 min',
    plot: 'James "Ghost" St. Patrick, a wealthy New York night club owner who has it all, catering for the city\'s elite and dreaming big, lives a double life as a drug kingpin.',
    poster:
      'https://ia.media-imdb.com/images/M/MV5BOTA4NTkzMjUzOF5BMl5BanBnXkFtZTgwNzg5ODkxOTE@._V1_SX300.jpg',
  },
  {
    title: 'Narcos',
    released: '28 Aug 2015',
    runtime: '49 min',
    plot: 'A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar.',
    poster:
      'https://ia.media-imdb.com/images/M/MV5BMTU0ODQ4NDg2OF5BMl5BanBnXkFtZTgwNzczNTE4OTE@._V1_SX300.jpg',
  },
  {
    title: 'Breaking Bad',
    released: '20 Jan 2008',
    runtime: '49 min',
    plot: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's financial future.",
    poster:
      'https://ia.media-imdb.com/images/M/MV5BMTQ0ODYzODc0OV5BMl5BanBnXkFtZTgwMDk3OTcyMDE@._V1_SX300.jpg',
  },
  {
    title: 'Doctor Strange',
    released: '04 Nov 2016',
    runtime: '120 min',
    plot: 'After his career is destroyed, a brilliant but arrogant and conceited surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.',
    poster:
      'https://ia.media-imdb.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg',
  },
  {
    title: 'Rogue One: A Star Wars Story',
    released: '16 Dec 2016',
    runtime: '110 min',
    plot: 'The Rebellion makes a risky move to steal the plans to the Death Star, setting up the epic saga to follow.',
    poster:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQyMzI2OTA3OF5BMl5BanBnXkFtZTgwNDg5NjQ0OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
  },
  {
    title: "Assassin's Creed",
    released: '21 Dec 2016',
    runtime: '150 min',
    plot: 'When Callum Lynch explores the memories of his ancestor Aguilar and gains the skills of a Master Assassin, he discovers he is a descendant of the secret Assassins society.',
    poster:
      'https://ia.media-imdb.com/images/M/MV5BMTU2MTQwMjU1OF5BMl5BanBnXkFtZTgwMDA5NjU5ODE@._V1_SX300.jpg',
  },
  {
    title: 'Luke Cage',
    released: '30 Sep 2016',
    runtime: '55 min',
    plot: 'Given superstrength and durability by a sabotaged experiment, a wrongly accused man escapes prison to become a superhero for hire.',
    poster:
      'https://ia.media-imdb.com/images/M/MV5BMTcyMzc1MjI5MF5BMl5BanBnXkFtZTgwMzE4ODY2OTE@._V1_SX300.jpg',
  },
];

const prisma = new PrismaClient();

function getRuntime(runtime: string) {
  const [mins, _] = runtime.split(' ');
  return parseInt(mins);
}

async function main() {
  for (const movie of movies) {
    await prisma.movie.create({
      data: {
        title: movie.title,
        runtime: getRuntime(movie.runtime),
        plot: movie.plot,
        poster: movie.poster,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
