// // src/layouts/experienceLayouts.js

// const experienceLayouts = {
//   default: {
//     structure: [
//       { type: "heading", field: "role", tag: "h3" },
//       { type: "subheading", field: "organization", tag: "h4" },
//       { 
//         type: "meta", 
//         fields: ["location", "startDate", "endDate"], 
//         format: "{location} | {startDate} - {endDate}", 
//         tag: "h6" 
//       },
//       { type: "list", field: "description", itemTag: "li" }
//     ]
//   },
//   layoutTwo: {
//     structure: [
//       { type: "row", columns: [
//           [
//             { type: "heading", field: "role", tag: "h3" },
//             { 
//               type: "meta", 
//               fields: ["location", "startDate", "endDate"], 
//               format: "{location} | {startDate} - {endDate}", 
//               tag: "h6" 
//             }
//           ],
//           [
//             { type: "subheading", field: "organization", tag: "h4" },
//             { type: "paragraphs", field: "description", itemTag: "p" }
//           ]
//       ]}
//     ]
//   }
// };

// export default experienceLayouts;


// layoutSchema.js
const templateLayouts = {
  default: {
    structure: [
      { type: "heading", field: "role", tag: "h3" },
      { type: "subheading", field: "organization", tag: "h4" },
      { 
        type: "meta", 
        fields: ["location", "startDate", "endDate"], 
        format: "{location} | {startDate} - {endDate}", 
        tag: "h6" 
      },
      { type: "list", field: "description", itemTag: "li" }
    ]
  },
  layoutTwo: {
    structure: [
      { type: "row", columns: [
          [
            { type: "heading", field: "role", tag: "h3" },
            { 
              type: "meta", 
              fields: ["location", "startDate", "endDate"], 
              format: "{location} | {startDate} - {endDate}", 
              tag: "h6" 
            }
          ],
          [
            { type: "subheading", field: "organization", tag: "h4" },
            { type: "paragraphs", field: "description", itemTag: "p" }
          ]
      ]}
    ]
  }
};

export default templateLayouts;
