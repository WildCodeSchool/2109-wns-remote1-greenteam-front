import React from 'react';
import Board from 'react-trello';

const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Backlog',
      label: '2/2',
      cards: [
        {
          id: 'Card1',
          title: 'Write Blog',
          description: 'Can AI make memes',
          label: '30 mins',
          draggable: false,
        },
        {
          id: 'Card2',
          title: 'Pay Rent',
          description: 'Transfer via NEFT',
          label: '5 mins',
          metadata: { sha: 'be312a1' },
        },
      ],
    },
    {
      id: 'lane2',
      title: 'Sprints',
      label: '0/0',
      cards: [],
    },
    {
      id: 'lane2',
      title: 'Bug Report',
      label: '0/0',
      cards: [],
    },
    {
      id: 'lane2',
      title: 'Done',
      label: '0/0',
      cards: [],
    },
  ],
};

export default function Backlog(): JSX.Element {
  return <Board data={data} />;
}
