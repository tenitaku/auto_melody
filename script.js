document.getElementById('generateButton').addEventListener('click', function() {
    var words = document.getElementById('inputWords').value.split(' ');
    var tempo = words.length * 10;
  
    // Create a new sequence
    var sequence = new Tone.Sequence(function(time, note) {
      synth.triggerAttackRelease(note, '8n', time);
    }, words, '4n');
  
    // Create a simple synth and connect it to the master output
    var synth = new Tone.Synth().toMaster();
  
    // Start the sequence
    Tone.Transport.bpm.value = tempo;
    sequence.start(0);
    Tone.Transport.start();
  });
  