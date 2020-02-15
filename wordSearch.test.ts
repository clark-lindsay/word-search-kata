import { wordSearch } from './wordSearch';

describe('the wordSearch function', () => {
  it('will return the index ranges of the targets in the given string grid', () => {
    const puzzleGrid = [
      `U,M,K,H,U,L,K,I,N,V,J,O,C,W,E`,
      `L,L,S,H,K,Z,Z,W,Z,C,G,J,U,Y,G`,
      `H,S,U,P,J,P,R,J,D,H,S,B,X,T,G`,
      `B,R,J,S,O,E,Q,E,T,I,K,K,G,L,E`,
      `A,Y,O,A,G,C,I,R,D,Q,H,R,T,C,D`,
      `S,C,O,T,T,Y,K,Z,R,E,P,P,X,P,F`,
      `B,L,Q,S,L,N,E,E,E,V,U,L,F,M,Z`,
      `O,K,R,I,K,A,M,M,R,M,F,B,A,P,P`,
      `N,U,I,I,Y,H,Q,M,E,M,Q,R,Y,F,S`,
      `E,Y,Z,Y,G,K,Q,J,P,C,Q,W,Y,A,K`,
      `S,J,F,Z,M,Q,I,B,D,B,E,M,K,W,D`,
      `T,G,L,B,H,C,B,E,C,H,T,O,Y,I,K`,
      `O,J,Y,E,U,L,N,C,C,L,Y,B,Z,U,H`,
      `W,Z,M,I,S,U,K,U,R,B,I,D,U,X,S`,
      `K,Y,L,B,Q,Q,P,M,D,F,C,K,E,A,B`
    ];
    const targets = ['BONES', 'KHAN', 'KIRK', 'SCOTTY', 'SPOCK', 'SULU', 'UHURA'];

    const puzzleGrid2 = `T V N E R P V M E C S B Z I A 
    A F R B U N B B L Q L X L C A 
    S T A C H O M P S N A C K S D 
    W J V Y U U H U U G N N A X U 
    A G A K L H E Z W D O X N U V 
    M B P J L T M Z T W I D E W E 
    W Y J O M A E L L M T I X Y S 
    Z S C I T A M E H T A M F N P 
    R L C I O R D S Y Q N J N A U 
    Y R X B O G E X B X R G I U V 
    D B S X E L L X S J E I U S Q 
    O W F M H Q X S C K T E G Q M 
    B M E N L W H S N Z N K K M A 
    P N X V Q X U E E B I J S V G 
    T L L Y J G A O X Q E J T M O`
      .split('\n')
      .map(str => str.trimLeft())
      .map(str => str.split(' ').join());

    const targets2 = [
      'ACKNOWLEDGEMENT',
      'CATS',
      'CHOMP',
      'DOGS',
      'INTERNATIONAL',
      'MATHEMATICS',
      'MEME',
      'PUZZLE',
      'SNACKS',
      'YEET'
    ];

    expect(wordSearch(targets, puzzleGrid)).toEqual({
      BONES: [
        [0, 6],
        [0, 7],
        [0, 8],
        [0, 9],
        [0, 10]
      ],
      KHAN: [
        [5, 9],
        [5, 8],
        [5, 7],
        [5, 6]
      ],
      KIRK: [
        [4, 7],
        [3, 7],
        [2, 7],
        [1, 7]
      ],
      SCOTTY: [
        [0, 5],
        [1, 5],
        [2, 5],
        [3, 5],
        [4, 5],
        [5, 5]
      ],
      SPOCK: [
        [2, 1],
        [3, 2],
        [4, 3],
        [5, 4],
        [6, 5]
      ],
      SULU: [
        [3, 3],
        [2, 2],
        [1, 1],
        [0, 0]
      ],
      UHURA: [
        [4, 0],
        [3, 1],
        [2, 2],
        [1, 3],
        [0, 4]
      ]
    });
    expect(wordSearch(targets2, puzzleGrid2)).toEqual({
      ACKNOWLEDGEMENT: [
        [14, 0],
        [13, 1],
        [12, 2],
        [11, 3],
        [10, 4],
        [9, 5],
        [8, 6],
        [7, 7],
        [6, 8],
        [5, 9],
        [4, 10],
        [3, 11],
        [2, 12],
        [1, 13],
        [0, 14]
      ],
      CHOMP: [
        [3, 2],
        [4, 2],
        [5, 2],
        [6, 2],
        [7, 2]
      ],
      CATS: [
        [3, 2],
        [2, 2],
        [1, 2],
        [0, 2]
      ],
      DOGS: [
        [10, 5],
        [9, 4],
        [8, 3],
        [7, 2]
      ],
      INTERNATIONAL: [
        [10, 13],
        [10, 12],
        [10, 11],
        [10, 10],
        [10, 9],
        [10, 8],
        [10, 7],
        [10, 6],
        [10, 5],
        [10, 4],
        [10, 3],
        [10, 2],
        [10, 1]
      ],
      MATHEMATICS: [
        [11, 7],
        [10, 7],
        [9, 7],
        [8, 7],
        [7, 7],
        [6, 7],
        [5, 7],
        [4, 7],
        [3, 7],
        [2, 7],
        [1, 7]
      ],
      MEME: [
        [6, 7],
        [6, 6],
        [6, 5],
        [6, 4]
      ],
      PUZZLE: [
        [7, 2],
        [7, 3],
        [7, 4],
        [7, 5],
        [7, 6],
        [7, 7]
      ],
      SNACKS: [
        [8, 2],
        [9, 2],
        [10, 2],
        [11, 2],
        [12, 2],
        [13, 2]
      ],
      YEET: [
        [9, 8],
        [8, 7],
        [7, 6],
        [6, 5]
      ]
    });
  });

  it('will return an empty object if it is given an empty puzzlegrid, or a puzzlegrid that does not contain any targets, or no targets', () => {
    expect(wordSearch(['some', 'words'], [])).toEqual({});
    expect(wordSearch(['some', 'words'], ['smol', 'word', 'puzl', 'grid'])).toEqual({});
    expect(wordSearch([], ['smol', 'word', 'puzl', 'grid'])).toEqual({});
  });
});
