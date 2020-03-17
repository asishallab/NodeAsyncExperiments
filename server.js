var express = require('express');
var graphqlHTTP = require('express-graphql');
var {
  buildSchema
} = require('graphql');
var cors = require('cors');


/* Server */
const app = express();


/* Schema */
console.log('Merging Schema');
//var merged_schema = mergeSchema(path.join(__dirname, './schemas'));
let merged_schema =
  `
type Author {
  id: ID
  name: String
}

type Page {
  id: ID
  number: Int
}

type Book {
  """
  @original-field
  """
  id: ID

  """
  @original-field
  """
  title: String

  """
  @original-field
  """
  genre: String

  authors: [Author]

  pages: [Page]
  pages1: [Page]
  pages2: [Page]
  pages3: [Page]
  pages4: [Page]
  pages5: [Page]
  pages6: [Page]
  pages7: [Page]
  pages8: [Page]
  pages9: [Page]
  pages10: [Page]
  pages11: [Page]
  pages12: [Page]
  pages13: [Page]
  pages14: [Page]
  pages15: [Page]
  pages16: [Page]
  pages17: [Page]
  pages18: [Page]
  pages19: [Page]
  pages20: [Page]
  pages21: [Page]
  pages22: [Page]
  pages23: [Page]
  pages24: [Page]
  pages25: [Page]
  pages26: [Page]
  pages27: [Page]
  pages28: [Page]
  pages29: [Page]
  pages30: [Page]
  pages31: [Page]
  pages32: [Page]
  pages33: [Page]
  pages34: [Page]
  pages35: [Page]
  pages36: [Page]
  pages37: [Page]
  pages38: [Page]
  pages39: [Page]
  pages40: [Page]
  pages41: [Page]
  pages42: [Page]
  pages43: [Page]
  pages44: [Page]
  pages45: [Page]
  pages46: [Page]
  pages47: [Page]
  pages48: [Page]
  pages49: [Page]
  pages50: [Page]
  pages51: [Page]
  pages52: [Page]
  pages53: [Page]
  pages54: [Page]
  pages55: [Page]
  pages56: [Page]
  pages57: [Page]
  pages58: [Page]
  pages59: [Page]
  pages60: [Page]
  pages61: [Page]
  pages62: [Page]
  pages63: [Page]
  pages64: [Page]
  pages65: [Page]
  pages66: [Page]
  pages67: [Page]
  pages68: [Page]
  pages69: [Page]
  pages70: [Page]
  pages71: [Page]
  pages72: [Page]
  pages73: [Page]
  pages74: [Page]
  pages75: [Page]
  pages76: [Page]
  pages77: [Page]
  pages78: [Page]
  pages79: [Page]
  pages80: [Page]
  pages81: [Page]
  pages82: [Page]
  pages83: [Page]
  pages84: [Page]
  pages85: [Page]
  pages86: [Page]
  pages87: [Page]
  pages88: [Page]
  pages89: [Page]
  pages90: [Page]
  pages91: [Page]
  pages92: [Page]
  pages93: [Page]
  pages94: [Page]
  pages95: [Page]
  pages96: [Page]
  pages97: [Page]
  pages98: [Page]
  pages99: [Page]
  pages100: [Page]
}

type Query {
  books: [Book]
}`

console.log(merged_schema);
var Schema = buildSchema(merged_schema);

/* Resolvers*/
let resolvers = {
  books: async function(args, context, info) {
    console.log(
      `${Date.now()} - Resolver books. recordsLimit: ${context.recordsLimit}`
    )
    context.recordsLimit -= 1
    return [{
      id: 1,
      title: 'Title One',
      genre: 'Genre One',
      authors: async function(args, context, info) {
          console.log(
            `${Date.now()} - Resolver authors. recordsLimit: ${context.recordsLimit}`
          )
          context.recordsLimit -= 2
          return [{
            id: 1,
            name: 'Shakesapple'
          }, {
            id: 2,
            name: 'Gothic Oete'
          }]
        },
        pages: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages1: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages1. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages2: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages2. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages3: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages3. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages4: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages4. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages5: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages5. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages6: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages6. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages7: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages7. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages8: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages8. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages9: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages9. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages10: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages10. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages11: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages11. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages12: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages12. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages13: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages13. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages14: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages14. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages15: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages15. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages16: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages16. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages17: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages17. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages18: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages18. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages19: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages19. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages20: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages20. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages21: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages21. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages22: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages22. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages23: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages23. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages24: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages24. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages25: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages25. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages26: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages26. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages27: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages27. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages28: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages28. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages29: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages29. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages30: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages30. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages31: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages31. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages32: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages32. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages33: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages33. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages34: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages34. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages35: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages35. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages36: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages36. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages37: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages37. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages38: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages38. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages39: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages39. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages40: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages40. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages41: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages41. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages42: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages42. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages43: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages43. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages44: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages44. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages45: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages45. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages46: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages46. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages47: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages47. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages48: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages48. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages49: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages49. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages50: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages50. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages51: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages51. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages52: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages52. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages53: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages53. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages54: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages54. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages55: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages55. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages56: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages56. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages57: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages57. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages58: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages58. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages59: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages59. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages60: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages60. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages61: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages61. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages62: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages62. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages63: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages63. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages64: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages64. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages65: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages65. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages66: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages66. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages67: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages67. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages68: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages68. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages69: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages69. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages70: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages70. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages71: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages71. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages72: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages72. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages73: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages73. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages74: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages74. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages75: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages75. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages76: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages76. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages77: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages77. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages78: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages78. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages79: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages79. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages80: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages80. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages81: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages81. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages82: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages82. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages83: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages83. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages84: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages84. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages85: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages85. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages86: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages86. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages87: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages87. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages88: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages88. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages89: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages89. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages90: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages90. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages91: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages91. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages92: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages92. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages93: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages93. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages94: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages94. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages95: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages95. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages96: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages96. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages97: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages97. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages98: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages98. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages99: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages99. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; },
        pages100: async function(args, context, info) { console.log( `${Date.now()} - Resolver pages100. recordsLimit: ${context.recordsLimit}`); context.recordsLimit -= 2; return [{ id: 1, number: 12 }, { id: 2, number: 21 }]; }
    }]
  }
}

/*request is passed as context by default  */
app.use('/graphql', cors(), graphqlHTTP((req) => ({
  schema: Schema,
  rootValue: resolvers,
  pretty: true,
  graphiql: true,
  context: {
    request: req,
    recordsLimit: 5
  },
  formatError(error) {
    return {
      message: error.message,
      details: error.originalError && error.originalError.errors ?
        error.originalError.errors : "",
      path: error.path
    };
  }
})));

var server = app.listen(3000, () => {
  console.log(`App listening on port 3000`);
});
