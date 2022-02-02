const MenuLoad = (() => {
  const content = document.querySelector('#content');

  const createMenu = () => {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu');
    menuContainer.innerHTML = `
    
    <div class="menu-body">
	
		<div class="menu-section">

    <h2 class="menu-section-title">appetizers</h2>

    <div class="menu-item">
				<div class="menu-item-name">
        Fried eggplant Rolls with Walnuts and Spices
				</div>		
				<div class="menu-item-price">
					$5
				</div>
				<div class="menu-item-description">
        A perfect make-ahead appetizer and a great idea for party finger food.
				</div>
			</div>

      <div class="menu-item">
				<div class="menu-item-name">
        Red Pkhali
				</div>		
				<div class="menu-item-price">
					$5
				</div>
				<div class="menu-item-description">
        Red Pkhali is a Georgian vegetable dish — made with beetroots. The main ingredient which makes pkhali so piquant is walnut-garlic dressing.
				</div>
			</div>

      <div class="menu-item">
				<div class="menu-item-name">
        Rolled Nadughi
				</div>		
				<div class="menu-item-price">
					$8
				</div>
				<div class="menu-item-description">
        It is soft cottage cheese, similar to Italian ricotta cheese. Usually it is served rolled in the thin leaves of Sulguni (mild, elastic cheese with layers, similar to Italian mozzarella). Nadughi is served with some pomegranates and mint.
				</div>
			</div>

			<h2 class="menu-section-title">main course</h2>
		
			<div class="menu-item">
				<div class="menu-item-name">
        Khachapuri
				</div>
				<div class="menu-item-price">
					$10
				</div>
				<div class="menu-item-description">
        Probably the most traditional Georgian dish. Translated, it means "cheesy bread" and these two words sum it all up. It is a flatbread made of leavened dough, filled with cheese.
				</div>
			</div>
		
			<div class="menu-item">
				<div class="menu-item-name">
        Khinkali
				</div>
				<div class="menu-item-price">
					$15
				</div>
				<div class="menu-item-description">
        Another traditional dish is khinkali. These are the dumplings stuffed with meat, potatoes, mushrooms or cheese.
				</div>
			</div>

			<div class="menu-item">
				<div class="menu-item-name">
        Ojakhuri
				</div>
				<div class="menu-item-price">
					$12
				</div>
				<div class="menu-item-description">
        Ojakhuri is a safe bet when I don´t want to try anything new. It contains everything I like - pork meat, potatoes, onion, garlic, all roasted together and served in a clay pot..
				</div>
			</div>
		
			<div class="menu-item">
				<div class="menu-item-name">
        Lobio
				</div>
				<div class="menu-item-price">
					$10
				</div>
				<div class="menu-item-description">
        Lobio is made of kidney beans, flavored with herbs and garlic and braised in a clay pot. Simple, tasty dish which is hard to spoil - so far, each lobio served to us was great. Usually eaten with the mchadi bread.
				</div>
			</div>
			
			
		</div>

		<div class="menu-section">
			<h2 class="menu-section-title">drinks</h2>
		
	
			<div class="menu-item">
				<div class="menu-item-name">
        Kindzmarauli
				</div>
				<div class="menu-item-price">
					$15
				</div>
				<div class="menu-item-description">
        A high quality naturally semi-sweet wine of dark-red color. It is made from the Saperavi grape variety cultivated on the slopes of the Caucasian mountains in the Kvareli district of Kakheti.
				</div>

			</div>
		
			<div class="menu-item">
				<div class="menu-item-name">
        Mukuzani
				</div>
				<div class="menu-item-price">
					$15
				</div>
				<div class="menu-item-description">
        Mukuzani is considered to be the best of the Georgian Dry Red wines made from Saperavi. It has won 9 gold medals, 2 silver medals and 3 bronze medals in international competitions.
				</div>

			</div>
		
			<div class="menu-item">
				<div class="menu-item-name">
        Pirosmani
				</div>
				<div class="menu-item-price">
					$15
				</div>
				<div class="menu-item-description">
        Pirosmani is a semi-sweet white wine made from a 40% Tsolikauri, 60% Tsitska blend. It has won 3 gold medals and one silver medal at international competitions.
				</div>

			</div>
	
			<div class="menu-item">
				<div class="menu-item-name">
        Taribana
				</div>
				<div class="menu-item-price">
					$15
				</div>
				<div class="menu-item-description">
        Taribana is a port-type wine made from the Rkatsiteli grape variety cultivated in Kakheti. The wine has a mild oily taste, a low sugar content and a beautiful color.
				</div>

			</div>
			
		</div>
		
	</div>	
    
    `;
    menuContainer.classList.toggle('new-page');
    content.insertBefore(menuContainer, content.childNodes[1]);
  };

  return { createMenu };
})();

export { MenuLoad };
