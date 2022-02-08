import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Beforeunload } from 'react-beforeunload';

function shuffle(a) {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}
var vals = [
	'Can speak and read another language',
	'Has an awful sleeping schedule',
	'Is lactose intolerant',
	'Plays an instrument (what instrument?)',
	'Has been inside the Cathedral of Learning (Cathy)',
	'Is involved or interested in Greek life (what org?)',
	'Tested negative for corona',
	'Is fluent in a second language (what language?)',
	'Has been to 5+ raves/music festivals',
	'Was born outside of the US (where?)',
	'Has worn colored contacts AND falsies',
	'Started a new project or hobby over the pandemic',
	'Dances often',
	'Owns a small dog (what breed?)',
	'Plays a sport (what sport?)',
	'Had a mushroom haircut as a kid',
	'Watches anime or kdramas (favorite?)',
	'Dyed your hair or got bangs over the pandemic',
	'Has their name mispronounced often',
	'Cooked something this Lunar New Year',
	'Has a pet (what pet?)',
	'Read a book over the pandemic (which one?)',
	'Cannot handle spicy food',
	'Has had bubble tea 3+ days in a row before',
];
shuffle(vals);

class Square extends React.Component {
	constructor(props) {
		super(props);
		this.state = { clicked: false };
		this.handleClick = this.handleClick.bind(this);

		this.handleChange = this.handleChange.bind(this);
	}

	handleClick() {
		if (this.state.clicked === true) {
			this.setState({ clicked: false });
		}
	}

	handleChange() {
		this.setState({ clicked: true });
	}

	render() {
		if (this.state.clicked === false) {
			return (
				<Col className="d-flex flex-column square px-1">
					<p>{this.props.val}</p>
					<textarea rows="2" placeholder="who'd ya meet?" onChange={this.handleChange}></textarea>
				</Col>
			);
		} else {
			return (
				<Col className="d-flex flex-column square clicked px-1" onClick={this.handleClick}>
					<p>{this.props.val}</p>
					<textarea rows="2" placeholder="who'd ya meet?" onChange={this.handleChange}></textarea>
				</Col>
			);
		}
	}
}

class BingoRow extends React.Component {
	render() {
		var first = vals[this.props.rowNum * 5];
		var second = vals[this.props.rowNum * 5 + 1];
		var third = vals[this.props.rowNum * 5 + 2];
		var fourth = vals[this.props.rowNum * 5 + 3];
		var fifth = vals[this.props.rowNum * 5 + 4];

		if (this.props.rowNum === 2) {
			third = 'Loves ASA (Free)';
		}
		if (this.props.rowNum === 4) {
			fifth = vals[12];
		}

		return (
			<Row>
				<Square val={first} />
				<Square val={second} />
				<Square val={third} />
				<Square val={fourth} />
				<Square val={fifth} />
			</Row>
		);
	}
}

export class App extends React.Component {
	render() {
		return (
			<div className="App container text-center my-sm-3">
				<Beforeunload onBeforeunload={() => 'You’ll lose your data!'} />
				<div className="title">
					<h1 className="asa">
						<a href="http://www.cmuasa.org/" target="_blank" rel="noopener noreferrer" className="red">
							ASA
						</a>{' '}
						Spring '22 Pitt x CMU ASA Bingo
					</h1>
					<h6 style={{"font-weight":"bold"}}>Try to find someone that's described by each box!</h6>
					<h6 style={{"font-weight":"bold"}}>
						Fill out the{' '}
						<a href="http://www.cmuasa.org/checkin" className="red" target="_blank" rel="noopener noreferrer">
							Check-in Form
						</a>{' '}
						for our{' '}
						<a href="http://www.cmuasa.org/contact" className="red" target="_blank" rel="noopener noreferrer">
							Contact Sheet!
						</a>
					</h6>
				</div>
				<Container className="mb-3">
					<BingoRow rowNum={0} />
					<BingoRow rowNum={1} />
					<BingoRow rowNum={2} />
					<BingoRow rowNum={3} />
					<BingoRow rowNum={4} />
				</Container>
				<footer>
					<hr width="80%" />
					<p>© 2020 Phi Henry Nguyen</p>
				</footer>
			</div>
		);
	}
}
