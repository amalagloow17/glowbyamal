import React from 'react';

const avisClients = [
  {
    name: 'Client',
    text: 'Slm amal cv wsltni la commande macha lah 3lik lah iatik saha ghzalin bzaffff ❤️'
  },
  {
    name: 'Client',
    text: 'Maacha2laah laa commende ghaazaalaa bzzzff wlaaah wles produit ghzaalin nchaalah ayyyy produiitt jdiddd kntsnaah😂 ❤️❤️❤️❤️❤️❤️🙂'
  },
  {
    name: 'Client',
    text: 'سلام حبيبة صافا كولشي مزيان جيت نقول ليك الله أعطيك صحة أختي اليوم جربت مقشر تاع نيلة زوين بزاف كيخلي جسم رطيطب فحال تاع بيبي صغار و ريحة فنة شكرا بزاف ❤️🥰'
  },
  {
    name: 'Client',
    text: 'Raha wslatni la commande vraiment l odeur zwinaaa hm9oni w njrbhom ngoulk ❤️'
  },
  {
    name: 'Client',
    text: 'Machelh elik ou ela Khdmtk gommage khatir zwine bzzf Kaykhli La peau bhale dyale bébé Hta riha dyalo fenna b n9awa Dakchi bio machelh elik ystahel wlh'
  },
  {
    name: 'Client',
    text: 'ختي تبارك الله عليك جربت دوك الكوماجات واعرين ولحم كيولي بحال ديال دراري صغار وريحتهو فنة بحالك ❤️❤️❤️❤️'
  }
];

function Avis() {
  return (
    <section className="avis-page">
      <div className="avis-marquee avis-marquee-top">
        <div>
          <span>✨AVIS CLIENTS✨</span>
          <span>GLOW BY AMAL</span>
          <span>EXPÉRIENCE PREMIUM</span>
          <span>CLIENTS SATISFAITS</span>
          <span>✨AVIS CLIENTS✨</span>
          <span>GLOW BY AMAL</span>
        </div>
      </div>

      <div className="container avis-container">
        <div className="avis-hero">
          <p className="avis-eyebrow">Témoignages</p>
          <h1>Ce que nos clientes disent</h1>
          <p>
            Des retours vrais, spontanés et remplis d’amour sur les produits
            Gloow by Amal.
          </p>
        </div>

        <div className="avis-grid">
          {avisClients.map((avis, index) => (
            <div className={`avis-card avis-card-${index + 1}`} key={index}>
              <div className="avis-card-head">
                <div className="client-avatar">C</div>
                <div>
                  <h3>{avis.name}</h3>
                  <span>Cliente vérifiée</span>
                </div>
              </div>

              <p className="avis-text">{avis.text}</p>

              <div className="avis-stars">★★★★★</div>
            </div>
          ))}
        </div>
      </div>

      <div className="avis-marquee avis-marquee-bottom">
        <div>
          <span>✨BEAUTÉ NATURELLE✨</span>
          <span>HAMMAM RITUALS</span>
          <span>✨'GLOW . CARE . CONFIDENCE✨</span>
          <span>BEAUTÉ NATURELLE</span>
          <span>HAMMAM RITUALS</span>
        </div>
      </div>
    </section>
  );
}

export default Avis;