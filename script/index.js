const members = [
	{ name: 'Peter Quill', id: 'peter' },
	{ name: 'Gamora Titan', id: 'gamora' },
	{ name: 'Drax o Destruidor', id: 'drax' },
	{ name: 'Mantis', id: 'mantis' },
	{ name: 'Rocket Raccoon', id: 'rocket' },
	{ name: 'I am Groot', id: 'groot' },
]

let activeMember = 0;
const images = document.getElementById('images');
const menu = document.getElementById('menu');
const memberName = document.getElementById('member__name')
const navegacao = document.querySelector('#navigation')

function changeMember(memberId) {
	activeMember = memberId
	activeMember = activeMember == 6 ? activeMember=0 : activeMember; 
	activeMember = activeMember < 0 ? activeMember=5 : activeMember; 

	const member = members[activeMember];

	images.style.transform = `translateY(${-100 * activeMember}vh)`

	memberName.classList = member.id;
	// memberName.innerText = member.name;
	changeName(member.name);

}

function navigationMember(direction) {
	changeMember(activeMember + direction);
	
}

function changeMenu() {
	menu.classList.toggle('active');
	navegacao.classList.toggle('active');

}

function setMember(memberId){
	changeMember(memberId);
	changeMenu()
}
