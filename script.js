document.getElementById('generateButton').addEventListener('click', function() {
    var words = document.getElementById('inputWords').value.split(' ');
    var tempo = words.length * 10; // Adjust tempo based on the number of words
    var tempo = words.length * 10;

    // Create a new sequence
    var sequence = new Tone.Sequence(function(time, note) {
      synth.triggerAttackRelease(note, '8n', time);
    }, words, '4n');

    // Create a simple synth and connect it to the master output
    var synth = new Tone.Synth().toMaster();

    // Create a loop that plays a note every quarter-note
    var loop = new Tone.Loop(function(time) {
      synth.triggerAttackRelease("C4", "8n");
    }, "4n").start(0);

    // Set the tempo and start the transport
    // Start the sequence
    Tone.Transport.bpm.value = tempo;
    sequence.start(0);
    Tone.Transport.start();
  });