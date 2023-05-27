document.getElementById('generateButton').addEventListener('click', function() {
    var words = document.getElementById('inputWords').value.split(' ');
    var tempo = words.length * 10; // Adjust tempo based on the number of words
  
    // Create a simple synth and connect it to the master output
    var synth = new Tone.Synth().toMaster();
  
    // Create a loop that plays a note every quarter-note
    var loop = new Tone.Loop(function(time) {
      synth.triggerAttackRelease("C4", "8n");
    }, "4n").start(0);
  
    // Set the tempo and start the transport
    Tone.Transport.bpm.value = tempo;
    Tone.Transport.start();
  });
  