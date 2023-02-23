Blockly.defineBlocksWithJsonArray([
{
  "type": "ultrasonic_kidmotor_read",
  "message0": "Ultrasonic trig pin: %1 echo pin: %2 read distance (cm)",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "trig",
      "options": [
        [
          "D1",
          "10"
        ],
        [
          "D2",
          "11"
        ],
        [
          "D3",
          "12"
        ],
        [
          "D4",
          "26"
        ],
        [
          "D5",
          "27"
        ],
        [
          "SV1",
          "18"
        ],
        [
          "SV2",
          "19"
        ],
        [
          "SV3",
          "20"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "echo",
      "options": [
        [
          "D1",
          "10"
        ],
        [
          "D2",
          "11"
        ],
        [
          "D3",
          "12"
        ],
        [
          "D4",
          "26"
        ],
        [
          "D5",
          "27"
        ],
        [
          "SV1",
          "18"
        ],
        [
          "SV2",
          "19"
        ],
        [
          "SV3",
          "20"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": "#004098",
  "tooltip": "Get data from Sony Remote",
  "helpUrl": ""
}
]);
