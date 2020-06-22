import React, { Component } from 'react';
import {
  FaCompass,
  FaBriefcase,
  FaUsers,
  FaUserFriends,
  FaUser,
} from 'react-icons/fa';
import Card from './Card';
import { brawl } from '../utils/api';

export default class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true,
    };
  }

  componentDidMount() {
    const { playerOne, playerTwo } = this.props;

    brawl([playerOne, playerTwo])
      .then((players) => {
        this.setState({
          winner: players[0],
          loser: players[1],
          error: null,
          loading: false,
        });
      })
      .catch(({ message }) => {
        this.setState({
          error: message,
          loading: false,
        });
      });
  }

  render() {
    const { winner, loser, error, loading } = this.state;

    if (loading === true) {
      return <p>LOADING</p>;
    }

    if (error) {
      return <p className="center-text error">{error}</p>;
    }

    return (
      <div className="grid space-around container-sm">
        {/* Winner */}
        <Card
          header={winner.score === loser.score ? 'Tie' : 'Winner'}
          subheader={`Score: ${winner.score.toLocaleString()}`}
          avatar={winner.profile.avatar_url}
          href={winner.profile.html_url}
          name={winner.profile.login}
        >
          <ul className="card-list">
            <li>
              <FaUser color="rgb(239, 115, 115)" size={22} />
              {winner.profile.name}
            </li>
            {/* if user has their location filled out */}
            {winner.profile.location && (
              <li>
                <FaCompass color="rgb(114, 115, 255)" size={22} />
                {winner.profile.location}
              </li>
            )}
            {/* if user has their company filled out */}
            {winner.profile.company && (
              <li>
                <FaBriefcase color="#795548" size={22} />
                {winner.profile.company}
              </li>
            )}
            <li>
              <FaUsers color="rgb(129, 195, 245)" size={22} />
              {winner.profile.followers.toLocaleString()} followers
            </li>
            <li>
              <FaUserFriends color="rgb(64, 183, 95)" size={22} />
              {winner.profile.following.toLocaleString()} following
            </li>
          </ul>
        </Card>

        {/* Loser */}
        <Card
          header={winner.score === loser.score ? 'Tie' : 'Winner'}
          subheader={`Score: ${loser.score.toLocaleString()}`}
          avatar={loser.profile.avatar_url}
          href={loser.profile.html_url}
          name={loser.profile.login}
        >
          <ul className="card-list">
            <li>
              <FaUser color="rgb(239, 115, 115)" size={22} />
              {loser.profile.name}
            </li>
            {/* if user has their location filled out */}
            {loser.profile.location && (
              <li>
                <FaCompass color="rgb(114, 115, 255)" size={22} />
                {loser.profile.location}
              </li>
            )}
            {/* if user has their company filled out */}
            {loser.profile.company && (
              <li>
                <FaBriefcase color="#795548" size={22} />
                {loser.profile.company}
              </li>
            )}
            <li>
              <FaUsers color="rgb(129, 195, 245)" size={22} />
              {loser.profile.followers.toLocaleString()} followers
            </li>
            <li>
              <FaUserFriends color="rgb(64, 183, 95)" size={22} />
              {loser.profile.following.toLocaleString()} following
            </li>
          </ul>
        </Card>
      </div>
    );
  }
}
