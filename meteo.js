<script type="text/javascript">
			
			
		    function showCity(vs){
		        let villeCourante = "LYON";
		        console.log(villeCourante);
		        
		        var vs = document.getElementById(vs);
	
		        
					if (vs.value == "Lyon") { 
						Lyon.style.display= "";
						Paris.style.display= "none"; 
						Bejaia.style.display= "none";  

					}
					if (vs.value == "Paris") { 
					    Lyon.style.display= "none";
					    Paris.style.display= ""; 
					    Bejaia.style.display= "none"; 
					}
					if (vs.value == "Bejaia") { 
					    Lyon.style.display= "none";
					    Paris.style.display= "none"; 
					    Bejaia.style.display= ""; 
					}
				
					
				
			}
		</script> 
