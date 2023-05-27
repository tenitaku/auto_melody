document.getElementById('generateButton').addEventListener('click', function() {
    var words = document.getElementById('inputWords').value.split(' ');
    var tempo = words.length * 10;
  
    // Create a new sequence
    var sequence = new Tone.Sequence(function(time, note) {
      synth.triggerAttackRelease(note, '8n', time);
    }, generateMelody(words), '4n');
  
    // Create a simple synth and connect it to the master output
    var synth = new Tone.Synth().toMaster();
  
    // Start the sequence
    Tone.Transport.bpm.value = tempo;
    sequence.start(0);
    Tone.Transport.start();
  });
  
  // Function to generate a melody based on the words
  function generateMelody(words) {
    var melody = [];
    var scale = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4'];
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var note = scale[i % scale.length];
      var octave = Math.floor(i / scale.length);
      var duration = word.length * 0.1;
  
      melody.push(note + (octave + 4) + ':' + duration);
    }
  
    return melody;
  }
  
  