all:
	python -m http.server 8000
	
	firefox-bin http://localhost:8000
