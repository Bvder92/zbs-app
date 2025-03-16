import React from "react";
import BackgroundImage from "../images/about1.jpg";

function About() {
  return (
    <section id="about">
      <div className="about-text">
        <h1>Nous veillons à ce que chaque séjour soit un pur plaisir</h1>
        <p>
          360 Host, votre de confiance pour la location saisonnière, propose
          une gestion intégrale pour les locations de courte et moyenne durée.
          Notre équipe s'engage à fournir un service exceptionnel, tant pour les
          propriétaires que pour les voyageurs, en s'assurant que chaque séjour
          soit mémorable. Si vous possédez un bien et envisagez de le louer,
          laissez-nous prendre les rênes : nous gérons tout de A à Z et
          maximisons vos revenus grâce à notre expertise et nos outils
          technologiques avancés. Avec 360 Host, découvrez une gestion de votre logment à 360°
        </p>
      </div>
      <div className="about-image">
        <img src={BackgroundImage} alt="Vue de la ville avec la Tour Eiffel" />
      </div>
    </section>
  );
}

export default About;
