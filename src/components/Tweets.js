import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from '../redux/actions';
import Tweet from './Tweet'

const Tweets = () => {
    const dispatch = useDispatch();
    const tweets = useSelector( state => state.tweets.tweets.data)
    dispatch(fetchTweets());
    return (
        <div>
            {tweets.map(tweet => <Tweet tweet={tweet} />)}
        </div>
    )
}

export default Tweets;