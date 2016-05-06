<?php
if(substr(basename($_SERVER['PHP_SELF']), 0, 11) == "imEmailForm") {
	include '../res/x5engine.php';
	$form = new ImForm();
	$form->setField('名前', $_POST['imObjectForm_1_1'], '', false);
	$form->setField('メール', $_POST['imObjectForm_1_2'], '', false);
	$form->setField('電話番号', $_POST['imObjectForm_1_3'], '', false);
	$form->setField('経験', $_POST['imObjectForm_1_4'], '', false);
	$form->setField('年齢', $_POST['imObjectForm_1_5'], '', false);
	$form->setField('体重', $_POST['imObjectForm_1_6'], '', false);
	$form->setField('身長', $_POST['imObjectForm_1_7'], '', false);
	$form->setField('メッセージ', $_POST['imObjectForm_1_8'], '', false);

	if(@$_POST['action'] != 'check_answer') {
		if(!isset($_POST['imJsCheck']) || $_POST['imJsCheck'] != 'jsactive' || (isset($_POST['imSpProt']) && $_POST['imSpProt'] != ""))
			die(imPrintJsError());
		$form->mailToOwner($_POST['imObjectForm_1_2'] != "" ? $_POST['imObjectForm_1_2'] : 'itsrelax@ezweb.ne.jp', 'itsrelax@ezweb.ne.jp', '', '', false);
		@header('Location: ../home.html');
		exit();
	} else {
		echo $form->checkAnswer(@$_POST['id'], @$_POST['answer']) ? 1 : 0;
	}
}

// End of file