const Database = require("./db");

const saveOrphanage = require("./saveOrphanage");

Database.then(async function (db) {
  // inserir dados na tabela
  // await db.run(`
  //     INSERT INTO orphanages (
  //         lat,
  //         lng,
  //         name,
  //         about,
  //         whatsapp,
  //         images,
  //         instructions,
  //         opening_hours,
  //         open_on_weekends
  //     ) VALUES (
  //        "-27.222633",
  //        "-49.6455874",
  //        "Lar das meninas",
  //        "Presta assitência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
  //        "11 94828654",
  //        "https://images.unsplash.com/photo-1605506412358-303da9ea238a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
  //        "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
  //        "Horário de Visitas Das 8h as 18h",
  //        "1"
  //     );
  // `
  // )

  //TESTE DO saveOrphanage
  // await saveOrphanage(db,{
  //     lat:"-27.222633",
  //     lng:"-49.6555874",
  //     name: "Lar dos meninos",
  //     about:"Presta assitência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
  //     whatsapp:"119949555",
  //     images:[
  //         "https://images.unsplash.com/photo-1605506412358-303da9ea238a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",

  //         "https://images.unsplash.com/photo-1605219926514-dd2f9f5039d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
  //     ].toString(),
  //     instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
  //     opening_hours:"Horário de Visitas Das 8h as 18h",
  //     open_on_weekends:"0"
  // })

  //CONSULTAR TODOS OS DADOS DA TABELA
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  // CONSULTAR TABELA PELO ID
  //    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "4"')
  //    console.log(orphanage)

  //    // DELETAR UM DADO DA TABELA

  console.log(await db.run('DELETE FROM orphanages WHERE id="5"'));

  // DELETAR TUDO DA TABELA

  //    console.log(await db.run('DELETE FROM orphanages'))
});

// node src/database/test.js
