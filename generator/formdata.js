    let saveFile = () => {
    	
        // Get the data from each element on the form.
    	const name = document.getElementById('txtTitle');
        const msg = document.getElementById('msgMessage');
        
        // This variable stores all the data.
        let data = 
            '\t \t \t \t \t \t \t <tr>' + '\n' +
			'\t \t \t \t \t \t \t \t <td style="padding: 10px; text-align: center; font-family: sans-serif; font-size: 30px; mso-height-rule: exactly; line-height: 20px; color: white; background-color: #004990">' + '\n' +
			'\t \t \t \t \t \t \t \t \t <b>' + name.value + '</b><br>' + '\n' +
			'\t \t \t \t \t \t \t \t </td>' + '\n' +
			'\t \t \t \t \t \t \t </tr>' + '\n' +
			'\t \t \t \t \t \t \t <tr>' + '\n' +
			'\t \t \t \t \t \t \t \t <td dir="rtl" align="center" valign="top" width="100%" style="padding: 10px;">' + '\n' +
			'\t \t \t \t \t \t \t \t \t <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">' + '\n' +
			'\t \t \t \t \t \t \t \t \t \t <tr>' + '\n' +
			'\t \t \t \t \t \t \t \t \t \t \t <td width="66.66%" class="stack-column-center">' + '\n' +
			'\t \t \t \t \t \t \t \t \t \t \t \t <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">' + '\n' +
			'\t \t \t \t \t \t \t \t \t \t \t \t \t <tr>' + '\n' +
			'\t \t \t \t \t \t \t \t \t \t \t \t \t \t <td dir="ltr" valign="top" style="font-family: sans-serif; font-size: 15px; mso-height-rule: exactly; line-height: 20px; color: #555555; padding: 10px; text-align: left;" class="center-on-narrow">' + '\n' +
			'\t \t \t \t \t \t \t \t \t \t \t \t \t \t \t <img id="hidesmall" style="width: 250px; float: right; margin: 5px;" src="https://cs.shsu.edu/images/people/neyaz_250x350.jpg" align="right">' + '\n' +
			'\t \t \t \t \t \t \t \t \t \t \t \t \t \t \t' + msg.value + '\n' +
			'\t \t \t \t \t \t \t \t \t \t \t \t \t \t </td>' + '\n' +
			'\t \t \t \t \t \t \t \t \t \t \t \t \t </tr>' + '\n' +
			'\t \t \t \t \t \t \t \t \t \t \t \t </table>' + '\n' +
			'\t \t \t \t \t \t \t \t \t \t \t </td>' + '\n' +
			'\t \t \t \t \t \t \t \t \t \t </tr>' + '\n' +
			'\t \t \t \t \t \t \t \t \t </table>' + '\n' +
			'\t \t \t \t \t \t \t \t </td>' + '\n' +
			'\t \t \t \t \t \t \t </tr>';
        
        // Convert the text to BLOB.
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'formData.txt';	   // The file to save the data.

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click(); 
    }